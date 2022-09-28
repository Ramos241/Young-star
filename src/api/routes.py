"""This module takes care of starting the API Server, Loading the DB and Adding the endpoints"""
from ast import Or
import os
from unicodedata import name
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import Post, User, db, Post
from api.utils import generate_sitemap, APIException
from werkzeug.security import generate_password_hash, check_password_hash
from base64 import b64encode
from flask_jwt_extended import create_access_token
from werkzeug.security import generate_password_hash, check_password_hash
from base64 import b64encode
import cloudinary.uploader as uploader

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)

VALID_FORMATS = ["image/png", "image/jpg", "image/jpeg"]


# def method_allowed(request, method):
#     if request.method != method:
#         return jsonify({"error": "Method not Allowed"}), 405


def get_password(password, salt):
    return generate_password_hash(f"{password}{salt}")


def check_password(hash_password, password, salt):
    return check_password_hash(hash_password, f"{password}{salt}")

# See all or one user


@api.route('/private', methods=['GET'])
@api.route('/private/<int:user_id>', methods=['GET'])
@jwt_required()
def handle_users(user_id=None):
    if request.method == 'GET':
        if user_id is None:
            users = User.query.all()
            user_id = User.query.get(get_jwt_identity())
            print(user_id.serialize())

            return jsonify(list(map(lambda item: item.serialize(), users))), 200

        elif user_id is not None:
            user = User.query.get(user_id)
            user_id = User.query.get(get_jwt_identity())
            print(user_id.serialize())
            if user is None:
                return jsonify({"message": "Error, couldn't find user"}), 404
            else:
                return jsonify(user.serialize()), 200

# Add a new users


@api.route('/signup', methods=['POST'])
def add_user():
    if request.method == 'POST':
        body = request.json
        username = body.get('username', None)
        email = body.get('email', None)
        password = body.get('password', None)

        if username is None or email is None or password is None:
            return jsonify('Send Payload'), 400
        else:
            salt = b64encode(os.urandom(32)).decode('utf-8')
            password = get_password(password, salt)
            request_user = User(username=username, email=email,
                                is_active=True, password=password, salt=salt)
            db.session.add(request_user)

            try:
                db.session.commit()
                return jsonify('Registro Exitoso'), 201
            except Exception as error:
                db.session.rollback()
                print(error.args)
                return jsonify('Usuario ya Registrado'), 500

    return jsonify(), 201


@api.route('/login', methods=['POST'])
def user_login():
    if request.method == 'POST':
        body = request.json
        email = body.get('email', None)
        password = body.get('password', None)

        if email is not None or password is not None:
            user_login = User.query.filter_by(email=email).one_or_none()
            if user_login:
                if check_password(user_login.password, password, user_login.salt):
                    print(check_password)
                    Coin = create_access_token(identity=user_login.id)
                    return jsonify({'token': Coin, "user_id": user_login.id})
                else:
                    return jsonify('Credenciales incorrectas'), 400
            else:
                return jsonify("Usuario no Registrado"), 404
        else:
            return jsonify('Credenciales incorrectas'), 400

    return jsonify('Seccion Iniciada con Exito'), 201


@api.route('/users', methods=['GET'])
def all_user(user_id=None):
    if request.method == 'GET':
        if user_id is None:
            user = User()
            user = user.query.all()

            return jsonify(list(map(lambda item: item.serialize(), user))), 200
        else:
            user = User()
            user = user.query.get(user_id)
            if user:
                return jsonify(user.serialize())

        return jsonify({"message": "not found"}), 404


@api.route('/users/single_user', methods=['GET'])
@jwt_required()
def single_user():
    if request.method == 'GET':
        user_id = get_jwt_identity()
        user = User().query.get(user_id)
        if user:
            return jsonify(user.serialize()), 200

    return jsonify({"message": "not found"}), 404


@api.route('/post', methods=['POST'])
def upload_img():
    if request.method == 'POST':
        image_file = request.files['img']
        # titulo = request.form.get('titulo')
        # descripcion = request.form.get('descripcion')
        # print(image_file, titulo, descripcion)

        if image_file.content_type not in VALID_FORMATS:
            return jsonify({"error": "File must be png, jpg, or jpeg"}), 400

        # if image_file is None or titulo is None or descripcion is None:
        if image_file is None:
            return jsonify({"error": "All fields are required(Titulo, File, Descripcion)"}), 400

        try:
            cloudinary_upload = uploader.upload(image_file)
            new_post = Post(
                img_url=cloudinary_upload["url"],  cloudinary_id=cloudinary_upload["public_id"])
            # titulo=titulo, img_url=cloudinary_upload["url"],  cloudinary_id=cloudinary_upload["public_id"], descripcion=descripcion)
            db.session.add(new_post)
            response = jsonify({"msg": "Post uploaded succesfully"})
            response.headers.add('Access-Control-Allow-Origin', '*')
            db.session.commit()
            return response

        except Exception as error:
            db.session.rollback()
            return jsonify({"error": error.args}), 500


@api.route('/post', methods=['GET'])
def get_post():

    try:
        post = Post.query.all()
        if post is None:
            return jsonify({"error": "No products"})

        return jsonify(list(map(lambda item: item.serialize(), post))), 200

    except Exception as error:
        return jsonify({"error": error}), 500


@api.route('/post/<int:id>', methods=['DELETE'])
def delete_post(id=None):

    if id is None:
        return jsonify({"error": "the product id is required"}), 400

    post = Post.query.get(id)
    if post is None:
        return jsonify({"error": "Post not found"}), 404

    try:
        cloudinary_delete_response = uploader.destroy(post.cloudinary_id)

        if cloudinary_delete_response["result"] != "ok":
            return jsonify({"error": "cloudinary deletion error"})

        db.session.delete(post)
        db.session.commit()

        return jsonify({"Msg": "Post deleted successfully"})

    except Exception as error:
        return jsonify({"error": error}), 500

# @api.route('/user_img/<int:id>', methods=['PUT'])
# def actualizar_img

"""empty message

Revision ID: ce78306b5be7
Revises: 
Create Date: 2022-10-06 20:44:21.825067

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ce78306b5be7'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('post',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('img_url', sa.String(length=120), nullable=False),
    sa.Column('cloudinary_id', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('cloudinary_id'),
    sa.UniqueConstraint('img_url')
    )
    op.create_table('post_galery',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('img_url', sa.String(length=120), nullable=False),
    sa.Column('title', sa.String(length=100), nullable=False),
    sa.Column('cloudinary_id', sa.String(length=120), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('cloudinary_id'),
    sa.UniqueConstraint('img_url'),
    sa.UniqueConstraint('title')
    )
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=100), nullable=False),
    sa.Column('email', sa.String(length=120), nullable=False),
    sa.Column('password', sa.String(length=200), nullable=False),
    sa.Column('salt', sa.String(length=150), nullable=False),
    sa.Column('is_active', sa.Boolean(), nullable=False),
    sa.Column('img_profile', sa.String(length=200), nullable=True),
    sa.Column('cloudinary_id', sa.String(length=120), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('cloudinary_id'),
    sa.UniqueConstraint('email')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('user')
    op.drop_table('post_galery')
    op.drop_table('post')
    # ### end Alembic commands ###

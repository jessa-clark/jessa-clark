class CommentsController < ApplicationController
before_action :get_comment, only: [:show, :update, :destroy]
before_action :authorize_request, only: [:update, :destroy]

def index
  comments = Comment.all
  render json: comments
end

def show
  render json: @comment
end

def create
  comment = Comment.new(comment_params)
  if comment.save
    render json: comment, status: :created
  else
    render json: comment.errors, status: :unprocessable_entity
  end
end

def update
  if @comment.update(comment_params)
    render json: @comment, status: :ok
  else
    render json: comment.errors, status: :unprocessable_entity
  end
end

def destroy
  @comment.destroy
  render json: "DELETED"
end


private

def comment_params
  params.require(:comment).permit(:name, :comment, :project_id)
end


def get_comment
  @comment = Comment.find(params[:id])
end

end

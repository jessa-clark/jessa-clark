class ProjectsController < ApplicationController
  before_action :get_project, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:update, :create, :destroy]
  
  def index
    projects = Project.all
    render json: projects
  end

  def show
    render json: @project, include: :comments
  end

  def create
    project = Project.new(project_params)
    if project.save
      render json: project, status: :created
    else
      render json: project.errors, status: :unprocessable_entity
    end
  end

  def update
    if @project.update(project_params)
      render json: @project, status: :ok
    else
      render json: project.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @project.destroy
    render json: "DELETED"
  end


  private

  def project_params
    params.require(:project).permit(:title, :image_url, :deployed_url, :github_url, :specs, :content, :user_id)
  end


  def get_project
    @project = Project.find(params[:id])
  end
end

class Api::UsersController < ApplicationController
    skip_before_action :authenticate_user
 
    def index
        render json: User.all
    end

    def me
        if current_user
            render json: current_user, status: :ok
        else
            render json: "Not authenticated", status: :unauthorized
        end
    end

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def show
        users = User.find(params[:id])
        render json: users, status: :ok 
    end

    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end

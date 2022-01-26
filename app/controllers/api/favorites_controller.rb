class Api::FavoritesController < ApplicationController
    # skip_before_action :authenticate_user
    def index
        render json: Favorite.all 
    end

    def create
        favorite = Favorite.create(favorite_params)
        render json: favorite, status: :accepted

    end

    def favorite_params
        params.permit(:user_id, :rental_id)
    end

    def destroy
        favorite = Favorite.find(params[:id])
        favorite.destroy
        {message: "Favorite Deleted"}.to_json
    end

end

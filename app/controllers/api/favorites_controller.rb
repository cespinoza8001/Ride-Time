class Api::FavoritesController < ApplicationController
    skip_before_action :authenticate_user
    def index
        render json: Favorite.all 
    end
end

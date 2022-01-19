class Api::RentalsController < ApplicationController
    skip_before_action :authenticate_user
    def index
        render json: Rental.all
    end

    def create
        rental = Rental.create(rental_params)
        render json: rental, status: :accepted

    end

    def rental_params
        params.permit(:year, :make, :model, :image_url, :price, :city, :state, :user_id)
    end
end

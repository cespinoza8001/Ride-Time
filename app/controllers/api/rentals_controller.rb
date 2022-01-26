class Api::RentalsController < ApplicationController
    skip_before_action :authenticate_user
    def index
        render json: Rental.all
    end

    def show
        rental = Rental.find(params[:id])
        render json: rental, status: :ok 
    end

    def create
        rental = Rental.create(rental_params)
        render json: rental, status: :accepted

    end

    def destroy
        rental = Rental.find(params[:id])
        rental.destroy
        {message: "Rental Deleted"}.to_json
    end

    def update
        rental = Rental.find(params[:id])
        rental.update({
            year: params[:year],
            make: params[:make],
            model: params[:model],
            city: params[:city],
            state: params[:state],
            price: params[:price],
            image_url: params[:image_url],
        })
    end

    def rental_params
        params.permit(:year, :make, :model, :image_url, :price, :city, :state, :user_id)
    end
end

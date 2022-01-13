class Api::RentalsController < ApplicationController
    skip_before_action :authenticate_user
    def index
        render json: Rental.all
    end
end

class TravelPackagesController < ApplicationController
  before_action :set_travel_package, only: %i[ show update destroy ]

  # GET /travel_packages
  def index
    @travel_packages = TravelPackage.all

    render json: @travel_packages
  end

  # GET /travel_packages/1
  def show
    render json: @travel_package
  end

  # POST /travel_packages
  def create
    @travel_package = TravelPackage.new(travel_package_params)

    if @travel_package.save
      render json: @travel_package, status: :created, location: @travel_package
    else
      render json: @travel_package.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /travel_packages/1
  def update
    if @travel_package.update(travel_package_params)
      render json: @travel_package
    else
      render json: @travel_package.errors, status: :unprocessable_entity
    end
  end

  # DELETE /travel_packages/1
  def destroy
    @travel_package.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_travel_package
      @travel_package = TravelPackage.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def travel_package_params
      params.require(:travel_package).permit(:name, :description, :image_url, :pricing, :itinerary, :booking_status, :destination_id)
    end
end

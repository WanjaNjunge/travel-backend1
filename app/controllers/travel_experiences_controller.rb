class TravelExperiencesController < ApplicationController
  before_action :set_travel_experience, only: %i[ show update destroy ]

  # GET /travel_experiences
  def index
    @travel_experiences = TravelExperience.all

    render json: @travel_experiences
  end

  # GET /travel_experiences/1
  def show
    render json: @travel_experience
  end

  # POST /travel_experiences
  def create
    @travel_experience = TravelExperience.new(travel_experience_params)

    if @travel_experience.save
      render json: @travel_experience, status: :created, location: @travel_experience
    else
      render json: @travel_experience.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /travel_experiences/1
  def update
    if @travel_experience.update(travel_experience_params)
      render json: @travel_experience
    else
      render json: @travel_experience.errors, status: :unprocessable_entity
    end
  end

  # DELETE /travel_experiences/1
  def destroy
    @travel_experience.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_travel_experience
      @travel_experience = TravelExperience.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def travel_experience_params
      params.require(:travel_experience).permit(:title, :description, :image_url)
    end
end

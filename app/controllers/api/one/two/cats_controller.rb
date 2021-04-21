class Api::One::Two::CatsController < ApplicationController
  def index
    render json: { cats: [{name: 'Jiji'}] }
  end
end

class Api::One::Two::CatsController < ApplicationController
  def index
    cats = [{ name: 'Jiji' }]
    # cats.push({ name: 'Pudding' }) # comment this out and reload the 'http://localhost:3000/' page, you'll see an erro

    render json: { cats: cats }
  end
end

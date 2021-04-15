class Api::One::Two::DogsController < ApplicationController
  def index
    dogs = [{ name: 'Taro' }]
    dogs.push({ name: 'Hachi' }) # comment this out and reload the 'http://localhost:3000/' page, you'll see an erro

    render json: { dogs: dogs }
  end
end

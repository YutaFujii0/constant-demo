class Api::One::Two::DogsController < ApplicationController
  def index
    'Do some work and change files' # comment this out and reload the 'http://localhost:3000/' page, you'll see an erro
    render json: { dogs: [{name: 'Taro'}] }
  end
end

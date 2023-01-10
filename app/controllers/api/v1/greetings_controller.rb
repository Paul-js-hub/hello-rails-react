class Api::V1::GreetingsController < Api::V1::ApplicationController
  def index
    @greetings = Greeting.order("RANDOM()").first
    render json: [@greetings], status: 200
  end
end
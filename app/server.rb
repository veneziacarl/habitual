require 'sinatra'
require 'sinatra/reloader'
require "sinatra/activerecord"
require 'pry'
require 'json'

require_relative 'models/habit'
require_relative 'models/user'
also_reload 'models/user'
also_reload 'models/habit'

get '/' do
  erb :index
end

get '/daily' do
  erb :daily
end

get '/daily.json' do
  @habits = Habit.all
  render json: @habits
end

post '/new' do

end

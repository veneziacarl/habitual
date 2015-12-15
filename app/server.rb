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
  @habits = Habit.where(time_type: "daily")
  @habits.to_json
end

get '/monthly.json' do
  @habits = Habit.where(time_type: "monthly")
  @habits.to_json
end

get '/yearly.json' do
  @habits = Habit.where(time_type: "yearly")
  @habits.to_json
end

post '/habits.json' do
  @habit = Habit.create(params)
  @habit.to_json
end

delete "/habits.json" do
  binding.pry
  Habit.delete(params[:id])
end

put "/daily.json" do

end

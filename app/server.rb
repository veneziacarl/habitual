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
  @habits.to_json
end

post '/daily.json' do
  @habit = Habit.create(params)
  @habit.to_json
end

delete "/daily.json" do
  
end

put "/daily.json" do

end

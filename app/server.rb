require 'sinatra'
require 'sinatra/reloader'
require "sinatra/activerecord"
require 'pry'

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

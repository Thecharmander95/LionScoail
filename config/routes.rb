Rails.application.routes.draw do
  devise_for :users
  root 'sites#home'

  get :about, to: 'sites#about'
end

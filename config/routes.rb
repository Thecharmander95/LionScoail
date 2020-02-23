Rails.application.routes.draw do
  devise_for :admins
  resources :posts
  devise_for :users
  root 'sites#home'

  get :about, to: 'sites#about'
end

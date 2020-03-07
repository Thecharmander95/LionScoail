Rails.application.routes.draw do
  resources :posts
  devise_for :users
  root 'sites#home'

  get :about, to: 'sites#about'
  get :view, to: "sites#view"
  get :usered, to: "sites#usered"

  scope "user" do
     get "users", to: "users#index"
     get "users/:id", to: "users#show", as: "user"
     delete "users/:id", to: "users#destroy"
  end
end

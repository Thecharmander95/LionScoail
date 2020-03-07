Rails.application.routes.draw do
  devise_for :owners
  devise_for :admins
  resources :posts
  devise_for :users
  root 'sites#home'

  scope "admin" do
     get "users", to: "users#index"
     get "users/:id", to: "users#show", as: "user"
     delete "users/:id", to: "users#destroy"
  end  
  get :about, to: 'sites#about'
  get :admin, to: "sites#admin"
  get :adminview, to: "sites#adminview"
end

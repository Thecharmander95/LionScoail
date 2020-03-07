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

  scope "owner" do
   get "admins", to: "admins#index"
   get "admins/:id", to: "admins#show", as: "admin"
   delete "admins/:id", to: "admins#destroy"
 end
 
  get :about, to: 'sites#about'
  get :admin, to: "sites#admin"
  get :adminview, to: "sites#adminview"
  get :ownerview, to: "sites#ownerview"
end

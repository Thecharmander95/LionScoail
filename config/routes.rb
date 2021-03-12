Rails.application.routes.draw do
  devise_for :users
  root 'homes#index'
  # All get
  get :admin, to: "admins#usersettings"
  get :features, to: "admins#disablefeatures"
  # All the resources
  resources :posts
  resources :abouts
  resources :errors
  resources :relationships, only: [:create, :destroy]
  resources :articles
  resources :badusers
  resources :acindents
  resources :suggestions
  resources :helps
  resources :stories
  resources :disables
  # All resources with do and end
  resources :users do
    member do
      get :following, :followers
    end
  end
  resources :posts do
    resources :comments
  end
  resources :articles do
    resources :feedbacks
  end
  resources :rooms do
    resources :room_messages
  end
  resources :conversations, only: [:index, :create, :destroy] do
    resources :messages, only: [:index, :create]
  end

  resources :articles do
    resources :feedbacks
  end
  # Lion Wiki gets
  get "howtos/rorwindowssub"
  get "howtos/rorbrewubuntu"
  get "howtos/rormacos"
  get 'infos/index'
  get 'howtos/index'
  get "infos/calabria"
end

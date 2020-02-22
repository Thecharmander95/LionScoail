Rails.application.routes.draw do
  root 'sites#home'

  get :about, to: 'sites#about'
end

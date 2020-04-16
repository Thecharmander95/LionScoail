class CleanStoriesJob < ApplicationJob
  include Sidekiq::Worker
  include Sidetiq::Schedulable

  recurrence { monthly }

  def perform
    Storie.recent.destroy_all
  end
end

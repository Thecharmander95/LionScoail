class CleanStorysJob < ApplicationJob
  include Sidekiq::Worker
  include Sidetiq::Schedulable

  recurrence { daily }

  def perform
    Dissaperingpost.recent.destroy_all
  end
end

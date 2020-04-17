class CleanStories
  include Sidekiq::Worker
  include Sidetiq::Schedulable

  recurrence { monthly }

  def perform
    Dissaperingpost.recent("created_at < :time", time: Time.current - 1.day).destroy_all
  end
end

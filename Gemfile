#
source 'https://rubygems.org'


gem 'rails', '~> 4.2.10'
gem 'rails-api', '~> 0.4.0'
gem 'pry-rails', '~> 0.3', '>= 0.3.4'
gem 'rack-cors', '~> 0.4', '>= 0.4.0', :require => 'rack/cors'

# gem 'actioncable', '~> 4.2.10'
# gem 'actionmailer', '~> 4.2.10'
# gem 'actionpack', '~> 4.2.10'
# gem 'actionview', '~> 4.2.10'
# gem 'activejob', '~> 4.2.10'
# gem 'activemodel', '~> 4.2.10'
# gem 'activerecord', '~> 4.2.10'
# gem 'activesupport', '~> 4.2.10'
# gem 'railties'

gem 'sass-rails', '~> 5.0.6'
gem 'uglifier', '~> 3.0.2'
gem 'coffee-rails', '~> 4.1.0'
gem 'jquery-rails', '~>4.2.1'
gem 'jbuilder', '~> 2.6.0'

group :development do
  gem 'spring', '~> 2.0', '>= 2.0.0'
end

group :development, :test do 
  gem 'webrick', '~> 1.3', '>= 1.3.1', :platforms => [:mingw, :mswin, :x64_mingw, :jruby]
  gem 'tzinfo-data', :platforms => [:mingw, :mswin, :x64_mingw, :jruby]
  gem 'rspec-rails', '~> 3.5', '>= 3.5.2'
  gem 'byebug', '~> 9.0', '>= 9.0.6'
  gem 'pry-byebug', '~> 3.4', '>= 3.4.0'
  gem 'httparty', '~> 0.14', '>= 0.14.0'
end

group :production do
  gem 'rails_12factor', '~> 0.0', '>= 0.0.3'
end

gem 'puma', '~> 3.6', '>= 3.6.0', :platforms => :ruby
gem 'pg', '~> 0.19.0', '>= 0.19.0'
gem 'mongoid', '~> 5.1', '>= 5.1.5'
gem 'mongo', '~> 2.3.1'

source 'https://rails-assets.org' do
# source 'http://insecure.rails-assets.org' do
  gem 'rails-assets-bootstrap', '~>3.3.7'
  gem 'rails-assets-angular', '~>1.5.9'
  gem 'rails-assets-angular-ui-router', '~>0.3.1'
  gem 'rails-assets-angular-resource', '~>1.5.9'
  gem 'rails-assets-ng-token-auth', '~>0.0.27'
  gem 'rails-assets-angular-cookie' #required by ng-token-auth
  gem 'rails-assets-ng-file-upload', '~>12.2.11'
  gem 'rails-assets-ng-file-upload-shim'
  gem 'rails-assets-ui-cropper', '~>1.0.4'
end
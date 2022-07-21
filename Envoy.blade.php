@include('vendor/autoload.php')

@servers(['web' => ['root@95.217.222.87']])

@setup
    $timezone = 'Europe/Amsterdam';
    $path = '/var/www/www-root/data/www/simsale.net';
    $repo = 'git@github.com:s00d/chatwoot.git';
    $branch = 'master';
    $keep = 6;
    $chmods = [
        'storage',
        'public',
    ];
    $symlinks = [
        'public'    => 'public',
    ];
    $date    = new DateTime('now', new DateTimeZone($timezone));
    $release = $path .'/releases/'. $date->format('YmdHis');
    $environment = isset($env) ? $env : "testing";
@endsetup

@task('deploy', ['on' => 'web', 'confirm' => true])
  echo "start"
  sudo -i -u chatwoot
  cd chatwoot/
  echo "load update"
  git reset --hard HEAD
  git checkout master && git pull
  echo "change ruby"
  rvm install "ruby-3.0.4"
  rvm use 3.0.4 --default
  echo "build"
  bundle
  yarn
  rake assets:precompile RAILS_ENV=production
  RAILS_ENV=production bundle exec rake db:migrate
  exit

  echo "replace daemon"
  cp /home/chatwoot/chatwoot/deployment/chatwoot-web.1.service /etc/systemd/system/chatwoot-web.1.service
  cp /home/chatwoot/chatwoot/deployment/chatwoot-worker.1.service /etc/systemd/system/chatwoot-worker.1.service
  cp /home/chatwoot/chatwoot/deployment/chatwoot.target /etc/systemd/system/chatwoot.target

  echo "restart daemon"
  systemctl daemon-reload
  systemctl restart chatwoot.target
  echo "end"
echo "deploy ended"
@endtask

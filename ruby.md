Actually, I am waiting for my workmate. He chatted back after I just start a blog. Sorry man, but I can’t stop writing 😛

Prerequisites
Homebrew 🍺
Let’s go!
1. Install GnuPG

$ brew install gnupg
2. Install GPG keys (pick First way or Second way)

2.1 First way

$ gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
2.2 Second way

$ gpg --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
3. Install RVM

$ \curl -sSL https://get.rvm.io | bash
4. We will receive a thank you 🙏 message in the console.

5. Quit all Terminal

6. Lunch a new Terminal and try this

$ rvm list
7. We will get this message

# No rvm rubies installed yet. Try 'rvm help install'.
8. Install some ruby version such as 2.7.1 (for an old version, such as 2.3.1 please check Tip topic below 😉)

$ rvm install 3.2.2 --with-openssl-dir=`brew --prefix openssl`
9. After installation, check which ruby version available.

$ rvm list
ruby-3.2.2 [ x86_64 ]
# Default ruby not set. Try 'rvm alias create default <ruby>'.
10. Create default ruby version

$ rvm alias create default 3.2.2
$ rvm automount
11. That’s it! Enjoys 🎉

Tip 💡
For the ruby old version, you may get this below error which relates openssl

/Users/pagorn/.rvm/src/rubygems-3.0.8/lib/rubygems/core_ext/kernel_require.rb:54:in `require': cannot load such file -- openssl (LoadError)
So, we should install openssl from rvm, then install old ruby with this openssl

$ rvm pkg install openssl
$ rvm install 2.3.1 --with-openssl-dir=$HOME/.rvm/usr

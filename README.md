## README

Just some random code to demo https://github.com/tjoyal/reactivity

I don't feel it's a great demo as there is no good user interaction in the current state.

In an ideal demo
- Object would get created, updated, deleted
- Object would be scoped so a user can only sync partial dataset

This is not the case here, at least not in the current state

1. Open the server
2. Open a web page (and "login", because it's a weird demo)
3. `bundle exec rake demo:activity` to generate database interactions
=> You'll see some internal state prints

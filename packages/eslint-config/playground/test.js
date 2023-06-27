const fullName = (firstName, lastName) => `${firstName} ${lastName}`

function fn(firstName, lastName) {
  return `${firstName} ${lastName}`
}

switch (false) {
  case false:
    fullName('', '')
    break
}

fn((() => 'John')(), (() => 'Smith')())
fn((() => 'John')(),
  (() => 'Smith')())
fn(
  (() => 'John')(),
  (() => 'Smith')()
)

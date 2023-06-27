type T1 = {
  a: string;
}

type Hello = 'hello'

interface I1 {
  a: string;
}

const f1 = (firstName: string, lastName: string): string => `${firstName} ${lastName}`

function f2(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`
}

switch (false) {
  case false:
    f1('', '')
    break
}

f2((() => 'John')(), (() => 'Smith')())

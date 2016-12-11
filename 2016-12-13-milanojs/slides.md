# 10 TDD myths


Everything they told you about testing is wrong


**test**: *noun* A procedure intended to establish the quality, performance, or reliability of something


SPOILER: everyone does testing


# About me

## Francesco Negri

## @dhinus

**Current job**: Software Engineer @ buildo.io

**Things I touched in the last 30 days**: React, Flow, Node.js, Jest, Scala,
Java, Docker, Terraform


# 1 You should write the tests first

TDD is dead. Long live testing.
http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html

http://rbcs-us.com/documents/Why-Most-Unit-Testing-is-Waste.pdf

<!-- .slide: data-background="https://cdn-images-1.medium.com/max/853/1*xdqC-G07xIIwIZXYRnKkLQ.jpeg" -->

Some alternatives to drive your design:

Readme-driven-development

Type-driven-development

Feature-driven-development

Guilt-driven-development

Biscuit-driven-development

DEMO 1: menu test which relies on knowledge of sub-components


#2 You should make sure your code is easy to test

This is post-truth development

<!-- .slide: data-background="http://i2.cdn.cnn.com/cnnnext/dam/assets/150628100138-donald-trump-mexico-immigration-wall-intv-tapper-sotu-00013814-full-169.jpg"-->

I don’t know how to write the test, so I’ll change my code instead

Would you rather have a hack in your tests or in your code?

https://dev.to/jackmarchant/no-excuses-write-unit-tests

Good: “A function is easily testable, if it always produces the same output, that is, it returns the same thing from inside the function, when given the same inputs (parameters).”

BAD: “You will find that after a while you start writing code that’s easily testable because you were thinking about how you would test that code, while you were writing it! Imagine that!”

<!-- .slide: data-background="http://cdn-jarvis-fun.9cache.com/media/photo/pagqD2DvG_1200w_v1.jpg"-->


#3 You should mock all dependencies

“if you want to use it in other parts of the code, you need it to be under test”

OVERENGINEERING ALERT

“If you don’t mock all dependencies it’s not a unit test”

Spoiler: TDD and BDD are the same thing

What is a Unit? What is a Behaviour?

![](https://upload.wikimedia.org/wikipedia/commons/2/22/Multimeter-4254e.jpg)

DEMO 2: menu rendering menu items rendering flexviews. unit is the full menu.


#4 You need dependency injection/IoC

“Your test has only access to the unit under test”

Come on… this is JavaScript! Everything is possible!
![](http://image.slidesharecdn.com/angularjswithsprings2gx2014-140911001928-phpapp02/95/creating-modular-testdriven-spas-with-spring-and-angularjs-9-638.jpg?cb=1410394948)

DEMO 3: mock ajax in vanilla js


#5 You should never hit the API

![](http://image.slidesharecdn.com/bdd-160807200025/95/bdd-2-638.jpg?cb=1470600054)

the beauty of the pyramid of testing: you don't have to start from the bottom

![](http://martinfowler.com/bliki/images/testPyramid/test-pyramid.png)

e2e is often done manually, so the sooner you automate it the more time you save

I'll write the units when ~~I'm~~ the project's dead


#6 You should never hit the DOM

Because it's just an implementation detail

Well, depends where you draw the boundaries

Cost vs Benefit

DEMO 4: getLocals


#7 Your tests should be super-fast

Can you run all your tests in less than 1 minute?

Can you delete some of your tests?

(Hint: nobody needs 100% coverage)


#8 Your tests should be perfectly deterministic

“Non-deterministic tests have two problems, firstly they are useless, secondly they are a virulent infection that can completely ruin your entire test suite.”
http://martinfowler.com/articles/nonDeterminism.html

Most of the times, a flapping test contains valuable information

You might be onto something
![](https://u2.photofunia.com/2/results/K/z/KztaPFULrVL9T3B2xglmWg_r.jpg)

1854 Broad Street cholera outbreak (hat tip: @demigoose)
![](https://upload.wikimedia.org/wikipedia/commons/2/27/Snow-cholera-map-1.jpg)


#9 You should not test the same thing twice

Taking this literally requires more mocking

A depends on B

B is a reusable component and you have a test for it

It's ok if the test for A is "testing" B again

If there is a regression in B, the test for B fails

If there is a regression in A, both tests fail


#10 You don't need tests if you use types

There's only a partial overlap

http://kevinmahoney.co.uk/articles/tests-vs-types/

https://medium.com/@gcanti/type-driven-development-with-flow-e06ee61e1bc9

DEMO 5: adding Flow to the menu won't test the 'disabled' prop


<!-- .slide: data-background="http://img09.deviantart.net/0248/i/2013/295/d/8/that_s_all_folks__by_surrimugge-d6rfav1.png"-->

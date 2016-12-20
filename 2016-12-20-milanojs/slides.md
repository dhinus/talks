# 10 TDD myths
<!-- .slide: data-background="img/mythical.png" -->


#### Original title
Everything they told you about testing is wrong


**test**: *noun* A procedure intended to establish the quality, performance, or reliability of something


SPOILER: everyone does testing


# About me

Francesco Negri

@dhinus

## Current job
Software Engineer @ [buildo.io](http://buildo.io)

## Things I touched in the last 30 days
React, Flow, Node.js, Jest, Scala, Java, Docker, Terraform


# MYTH #1: You should write the tests first
<!-- .slide: data-background="img/myth01.png" -->

I thought the case was settled...
<!-- .slide: data-background="img/myth01opa.png" -->

#### TDD is dead. Long live testing.
<small>http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html</small>
<!-- .slide: data-background="img/myth01opa.png" -->

#### Why Most Unit Testing Is Waste
<small>http://rbcs-us.com/documents/Why-Most-Unit-Testing-is-Waste.pdf</small>
<!-- .slide: data-background="img/myth01opa.png" -->

But this came out last month...
<!-- .slide: data-background="img/myth01opa.png" -->

<!-- .slide: data-background="https://cdn-images-1.medium.com/max/1920/1*xdqC-G07xIIwIZXYRnKkLQ.jpeg" -->
##### https://youtu.be/KgsJSGjcU-U

Some alternatives to drive your design:
<!-- .slide: data-background="img/myth01opa.png" -->

#### Readme-driven-development
You start by writing the Readme
<!-- .slide: data-background="img/myth01opa.png" -->

#### Type-driven-development
You start by writing the function signatures
<!-- .slide: data-background="img/myth01opa.png" -->

#### Feature-driven-development
You start by writing some User Stories
<!-- .slide: data-background="img/myth01opa.png" -->

#### Guilt-driven-development
You start by feeling guilty because you've been mostly reading Twitter for the
past ~~two~~ four hours
<!-- .slide: data-background="img/myth01opa.png" -->

<!-- .slide: data-background="https://cdn-images-1.medium.com/max/1920/1*uSnBYztyE_5hvR5Kai4NhQ.jpeg" -->
#### https://youtu.be/1rxrl_xbhns

<!-- .slide: data-background="https://upload.wikimedia.org/wikipedia/commons/8/82/Chocolate_Biscuits_-_Kolkata_2011-11-15_7020.JPG" -->
#### Biscuit-driven-development
You start by eating a biscuit<!-- .element: style="color: #fff" -->
<div class="credit">Image: [Biswarup Ganguly](https://commons.wikimedia.org/wiki/File:Chocolate_Biscuits_-_Kolkata_2011-11-15_7020.JPG)</div>

<!-- .slide: data-background="https://cdn.meme.am/cache/instances/folder917/64925917.jpg" -->


# MYTH #2: You should make sure your code is easy to test
<!-- .slide: data-background="img/myth02.png" -->

<!-- .slide: data-background="http://i2.cdn.cnn.com/cnnnext/dam/assets/150628100138-donald-trump-mexico-immigration-wall-intv-tapper-sotu-00013814-full-169.jpg"-->
## This is post-truth development

"I don’t know how to write the test, so I’ll change my code instead"
<!-- .slide: data-background="img/myth02opa.png" -->

Would you rather have a hack in your tests or in your code?
<!-- .slide: data-background="img/myth02opa.png" -->

#### Another recent blogpost
https://dev.to/jackmarchant/no-excuses-write-unit-tests
<!-- .slide: data-background="img/myth02opa.png" -->

### Good
“A function is easily testable, if it always produces the same output, that is, it returns the same thing from inside the function, when given the same inputs (parameters).”
<!-- .slide: data-background="img/myth02opa.png" -->

### Bad
“You will find that after a while you start writing code that’s easily testable because you were thinking about how you would test that code, while you were writing it! Imagine that!”
<!-- .slide: data-background="img/myth02opa.png" -->

<!-- .slide: data-background="http://cdn-jarvis-fun.9cache.com/media/photo/pagqD2DvG_1200w_v1.jpg"-->


# MYTH #3: You should mock all dependencies
<!-- .slide: data-background="img/myth03.png" -->

“if you want to use it in other parts of the code, you need it to be under test”
<!-- .slide: data-background="img/myth03opa.png" -->

<!-- .slide: data-background="https://uploads.disquscdn.com/images/be0b838aa8ad1c780b9f13d652412ca1682c584c0934b66f87110d35a994fe02.gif"-->
# OVERENGINEERING ALERT

“If you don’t mock all dependencies it’s not a unit test”
<!-- .slide: data-background="img/myth03opa.png" -->

<!-- .slide: data-background="http://dhinus.github.io/talks/2015-12-22-cayenne/img/philosotest.jpg"-->

TL;DR: TDD and BDD are the same thing
<!-- .slide: data-background="img/myth03opa.png" -->

What is a Unit? What is a Behaviour?
<!-- .slide: data-background="img/myth03opa.png" -->

<!-- .slide: data-background="https://upload.wikimedia.org/wikipedia/commons/2/22/Multimeter-4254e.jpg"-->
<div class="credit">Image: [David R. Tribble](https://en.wikipedia.org/wiki/Multimeter#/media/File:Multimeter-4254e.jpg)</div>

<!-- .slide: data-background="https://cdn.meme.am/cache/instances/folder234/500x/51181234.jpg"-->


# MYTH #4: You need dependency injection/IoC
<!-- .slide: data-background="img/myth04.png" -->

“Your test has only access to the unit under test”
<!-- .slide: data-background="img/myth04opa.png" -->

<!-- .slide: data-background="http://image.slidesharecdn.com/angularjswithsprings2gx2014-140911001928-phpapp02/95/creating-modular-testdriven-spas-with-spring-and-angularjs-9-638.jpg" -->
#### Come on… this is JavaScript!<br>Everything is possible!

<!-- .slide: data-background="http://m.memegen.com/bwszmc.jpg" -->


# MYTH #5: You should never hit the API
<!-- .slide: data-background="img/myth05.png" -->

<!-- .slide: data-background="http://image.slidesharecdn.com/bdd-160807200025/95/bdd-2-638.jpg" -->

The beauty of the test pyramid: you don't have to start from the bottom
<!-- .slide: data-background="img/myth05opa.png" -->

![]()
<!-- .slide: data-background="http://martinfowler.com/bliki/images/testPyramid/test-pyramid.png" -->
<div class="credit">Image: [Martin Fowler](http://martinfowler.com/bliki/TestPyramid.html)</div>

E2E tests are often done manually, so the sooner you automate them the more time you save
<!-- .slide: data-background="img/myth05opa.png" -->

You can write the units when ~~you're~~ the project's dead
<!-- .slide: data-background="img/myth05opa.png" -->


# MYTH #6: You should never hit the DOM
<!-- .slide: data-background="img/myth06.png" -->

"Because it's just an implementation detail"
<!-- .slide: data-background="img/myth06opa.png" -->

Well, depends where you draw the boundaries
<!-- .slide: data-background="img/myth06opa.png" -->

Cost vs Benefit
<!-- .slide: data-background="img/myth06opa.png" -->

<!-- .slide: data-background="https://cdn.meme.am/cache/instances/folder609/57887609.jpg" -->


# MYTH #7: Your tests should be super-fast
<!-- .slide: data-background="img/myth07.png" -->

Can you run all your tests in less than 1 minute?
<!-- .slide: data-background="img/myth07opa.png" -->

Can you delete some of your tests?
<!-- .slide: data-background="img/myth07opa.png" -->

(Hint: nobody needs 100% coverage)
<!-- .slide: data-background="img/myth07opa.png" -->


# MYTH #8: Your tests should be perfectly deterministic
<!-- .slide: data-background="img/myth08.png" -->

“Non-deterministic tests have two problems, firstly they are useless, secondly they are a virulent infection that can completely ruin your entire test suite.”
<div class="credit">http://martinfowler.com/articles/nonDeterminism.html</div>
<!-- .slide: data-background="img/myth08opa.png" -->

Most of the times, a flapping test contains valuable information
<!-- .slide: data-background="img/myth08opa.png" -->

You might be onto something
<!-- .slide: data-background="img/myth08opa.png" -->

<!-- .slide: data-background="http://sd.keepcalm-o-matic.co.uk/i-w600/keep-calm-and-find-the-reason.jpg" -->

<!-- .slide: data-background="https://upload.wikimedia.org/wikipedia/commons/2/27/Snow-cholera-map-1.jpg" -->
#### 1854 Broad Street cholera outbreak
<div class="credit">Hat tip: [@demigoose](https://twitter.com/demigoose)</div>


# MYTH #9: You should not test the same thing twice
<!-- .slide: data-background="img/myth09.png" -->

<!-- .slide: data-background="img/myth09opa.png" -->
* Taking this literally requires more mocking.
* Let's see why.

<!-- .slide: data-background="img/myth09opa.png" -->
* A depends on B
* B is a reusable component with its own test<!-- .element: class="fragment" -->

<!-- .slide: data-background="img/myth09opa.png" -->
#### It's ok if the test for A is "testing" B again
* No need to mock B!<!-- .element: class="fragment" -->
* If there is a regression in B, the test for B fails<!-- .element: class="fragment" -->
* If there is a regression in A, both tests fail<!-- .element: class="fragment" -->


# MYTH #10: You don't need tests if you use types
<!-- .slide: data-background="img/myth10.png" -->

There's only a partial overlap
<!-- .slide: data-background="img/myth10opa.png" -->

#### Tests vs Types
<small>http://kevinmahoney.co.uk/articles/tests-vs-types/</small>
<!-- .slide: data-background="img/myth10opa.png" -->

##### Type driven development with Flow
<small>https://medium.com/@gcanti/type-driven-development-with-flow-e06ee61e1bc9</small>
<!-- .slide: data-background="img/myth10opa.png" -->

<!-- .slide: data-background="https://cdn.meme.am/cache/instances/folder28/500x/61085028.jpg" -->


<!-- .slide: data-background="img/myth11.png" -->
# THE END
For any questions, ask the flying horse

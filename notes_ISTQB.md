# Fundamentals of Testing

## keywords

**coverage:** percentage of reqs covered by tests. Also can be percentage of code tests hit.
**debugging:** concerned with finding causes rather than defects and involves fixing defects while testing only identifies.  
**defect:** Something broken.  
**error:** A human action that causes and incorrect result made during dev or test  
**failure:** deviation of component or system from expected delivery  
**quality:** Degree to which a test object meets reqs/customer expectations  
**quality assurance:** focus on process implementation and improvement, preventative, "Are we building the product right?"  
**root cause:** Underlying cause  
**test analysis:** "what to test?"  
**test basis:** all info and docs used to derive test cases and figure out what needs to be tested.  
**test case:** inputs, befores, expected results, afters -- for specific objective or condition to exercise code path or verify req  
**test completion:** happens at project milestones, test env shutdown, analysis for future happens.  
**test condition:** an item or event that can be verified by a test case(s)  
**test control:** a test management task, take actions necessary to meet the objectives of test project, ongoing activitiy to stay on course  
**test data:** Fixtures -- any data necessary to run tests (like username and password)  
**test design:** "how to test?"  
**test execution:** running the tests  
**test implementation:** most of the work, writing and organizing the actual tests  
**test monitoring:** checking of test activities. "are these tests working?"  
**test object:** the component, system, or work product under test (diff from software/app or the overall product or system); test objects are smaller in scope and context dependent  
**test objective:** What is the test trying to test?  
**test planning:** define test strategy, approach, resources, schedule  
**test procedure:** test script, sequences of test cases in execution order, step-by-step process making sure testing happens as planned  
**test process:** planning/control -> analysis/design -> implementation/execution -> exit criteria/reporting -> test closure  
**test result:** consequence/outcome of test execution  
**testing:** focus on finding defects, "Did we build the product right?"  
**testware:** artifacts produced during the test process and required to plan, design, and execute tests  
**traceability:** ability to identify related items in documentation and software (e.g., reqs -> test cases or test data -> test cases)  
**validation:** checking if system meets users' and stakeholders' needs  
**verification:** checking if system meets reqs

## Terms ordered by broadest to most narrow:

Here are the terms ordered from broadest to most narrow:

quality - Overall degree of meeting requirements and expectations
quality assurance - Process-focused approach to ensuring quality
testing - Overall activity of finding defects
validation - Broad checking against user/stakeholder needs
verification - Broad checking against requirements
test process - The fundamental framework for all testing activities
traceability - Ability to link items across the entire testing lifecycle
testware - All artifacts produced during testing
test planning - High-level strategy and approach definition
test control - Management and steering of test activities
test monitoring - Ongoing oversight of test activities
test completion - End-of-phase activities and analysis
test basis - All information used to derive tests
test analysis - Determining what to test
test design - Determining how to test
test implementation - Creating the actual tests
test object - Component/system being tested
test objective - What a test is trying to achieve
coverage - Measurement of how much is tested
test condition - Testable aspect derived from test basis
test case - Specific set of inputs and expected results
test procedure - Sequence of test cases with execution steps
test execution - Running the tests
test data - Specific data needed to run tests
test result - Outcome of test execution
root cause - Underlying reason for issues
error - Human mistake during development
defect - Something broken in the system
failure - Observable deviation from expected behavior
debugging - Finding and fixing specific defect causes

The ordering reflects scope and conceptual hierarchy, with quality being the broadest concept and debugging being the most specific, focused activity.

## Terms ordered by the testing timeline:

Before Testing Begins:

quality assurance - Process implementation and improvement (ongoing organizational activity)
test planning - Establishing test strategy and approach
test basis - Gathering all information needed to derive tests
test analysis - Determining what to test
test design - Determining how to test
test condition - Identifying testable aspects
test case - Creating specific test scenarios
test procedure - Sequencing test cases for execution
test implementation - Writing and organizing the actual tests
test data - Preparing data needed for test execution

During Testing:

test execution - Running the tests
test result - Immediate outcome of each test run
failure - When system doesn't work as expected
defect - Identified broken functionality
debugging - Finding and fixing defect causes
error - Human mistakes discovered during testing

Throughout the Testing Process:

quality - Overall goal being pursued throughout
testing - The overarching activity throughout
test process - The framework governing all activities
test control - Ongoing management and steering
test monitoring - Continuous oversight of activities
test object - The thing being tested (consistent focus)
test objective - Goals driving test activities
testware - Artifacts created and used throughout
coverage - Measured and tracked continuously
traceability - Maintained throughout the process
validation - Ongoing checking against user needs
verification - Ongoing checking against requirements

After Testing/At Milestones:

test completion - End-of-phase activities and analysis
root cause - Deeper analysis of defects found

Note that many activities overlap and iterate, but this represents the typical chronological flow of when these concepts first become primary focus areas in the testing lifecycle.

## Notes:

_Testing_ is different from _debugging_, which is conecerned with finding causes of failures and fixing them.

_Static_ testing is done without executing software. It directly finds defects and does not cause failures because nothing is being ran.

_Dynamic_ testing is done when running software.

_QA_ is different from testing: broader scope (testing is part of QA), focus on implementation and improvement of processes. A QA uses test results to see how well development and processes are performing.

**Traceability** maps testware (products of a test, e.g., plan, risk assessment, progress reports, analysis of test conditions, scripts, envs--stubs, simulators, drivers, virtualizations--, logs, bug reports, completion reports, change requests) to test basis (like reqs and customer expectations, risks, coverage reqs).

### Testing Principles

1.  Testing shows the presence (not absence) of defects.
2.  Exhaustive testing is impossible.
3.  Early testing saves time and money.
4.  Defects cluster (Pareto principle). This helps identify risk areas and focus testing.
5.  Pesticide paradox: Aside from regression, some tests wear out and don't need to be run over and over (devs learn test patterns, old tests don't test newly added code, devs code to the exact test scenerio and miss variants).
6.  Testing is context dependent.
7.  Absense-of-defects does not mean system meets users' needs.

### Roles:

1. Test management: writing strategy, decide what should be automated, writing summary reports
2. Testing role: review and execute tests written by others

### Traits of a Tester:

knowledge, thoroughness, carefulness, curiosity, attention to detail, methodical, communication, listening, analytical but also creative, domain knowlege, personable (because testers are often considered the bearers of bad news and can be blamed for delays).

# Testing throughout the software development lifecycle

## keywords

### Test Levels (scope/granularity)

**test level**: group of tests organized together, for example group tests into one of the following categories:  
**component testing**: individual components testing (does button change from red to green when ready)  
**component integration testing**: testing data flow and control between integrated components, interfaces -- the connection points between components or systems  
**integration testing**: testing interaction between components and systems, apis, modules, etc.  
**system integration testing**: testing integration of systems and external interfaces/apis/modules/libraries  
**system testing**: testing whole system  
**acceptance testing**: formally testing against acceptance criteria

### Test Types (what stuff is being tested?)

**test type**: group tests by characteristics, for example the following:  
**functional testing**: compliance with functional reqs  
**non-functional testing**: compliance with reqs like performance, usability, cross-compatability, etc... load testing...
--- performance efficiency, compatability, usability, reliability, security, maintainability, portability/flexability, safety (PCURSMFS)

### Test approaches (how testing is done):

**black-box testing**: no ref to code  
**white-box testing**: know about code and internal struct of proj

### change-related testing:

**confirmation testing**: re-testing to check fixes  
**regression testing**: testing the unchanged areas to make sure new code/features didn't break stuff  
**maintenance testing**: testing changes to an operational system (e.g., testing a working site on a different browser)

### Testing concepts:

**test object**: component under test  
**shift left**: testing performed earlier in the lifecycle (move testing stuff left on timeline)

## Notes

**SDLC** -- the software development lifecycle affects how testing is done. Can all be done at end after project has reached completion or as each iterative cycle completes, or in agile, it will be more experience-based and exploratory testing techniques as new features are added and the system evolves.

**SDLC-agnostic test techniques**:

- 1-1 correspondence between software dev activity and test activity
- each test level has specific objectives, so there's less overlap/redundancy
- test design begins during dev phase for feature for earlier testing
- testers are invovled in reviews of work products (early detection/shift left)

TDD, ATDD, BDD (test/acceptance test, behavior)

**Field testing**: performed by people at client's location

When to stop testing -- when testing period is over (schedule)

**test suite**: tests organized into managed and scheduled units

**confirmation testing**: confirms orig defect is fixed
**regression testing**: nothing that was working was broken by changes (perform an impact analysis to see which parts of system were affected by change)

CI/CD pipelines can be set up to do impact analyses --

1. git diff
2. dependency mapping to see affected components (map unit tests to files by placing inside same directories as files they test)
3. code coverage data (Cypress coverage)

**maintainance testing**: when -- modifications, upgrades, migrations to new env, retirement; what -- degree of risk in change, size of system, size of change.

# Static Testing:

## keywords

**anomaly**: deviation from reqs, docs, user standards, perception/experience
**dynamic testing**: execute software to test
**formal review**: review that follows defined process with documented procedures and reqs-- entry and exit criteria, documented results, systematic approach
**informal review**: no written instructions, minimal documentation, flexible process
**inspection**: most formal review type, moderator and author are different, all reqs from formal review plus metrics for process improvement
**review**: evaluation of product or project, where are there discrepancies from planned results and how can we improve?
**static analysis**: exam source code and software artifacts w/o execution, looking at code structure, complexity, missing features (based on reqs)
**static testing**: no-execution testing (e.g., is selected framework cross-platform if necessary?)
**technical review**: more purpose-driven than other types of reviews, gain consensus and detect possible defects, build confidence and motivate devs to improve
**walkthrough**: author walks you through the doc, sharing and understanding info

## Terms grouped according to heirarchy:

Here are the testing terms grouped in meaningful categories:

### Testing Approaches (fundamental methods)

static testing - Testing without executing the software
dynamic testing - Testing that involves executing the software

### Static Testing Techniques

static analysis - Automated examination of code/artifacts without execution
review - Human evaluation of products or project status

### Review Types (by formality level)

#### Most Formal:

inspection - Most formal review with defined process, moderator, entry/exit criteria, and metrics

#### Moderately Formal:

technical review - Focus on consensus and defect detection, variable formality
formal review - Follows defined process with documented procedures

#### Least Formal:

walkthrough - Author-led presentation to gather information and understanding
informal review - No written instructions, minimal documentation

#### Findings/Results

anomaly - Any condition that deviates from expectation (found in both static and dynamic testing)

#### Key Relationships:

Static testing encompasses both static analysis (automated) and reviews (human)
Reviews range from informal to inspection (most formal)
Anomalies can be discovered through any testing approach
Dynamic testing stands alone as the execution-based approach

This grouping shows the hierarchy from broad testing approaches down to specific review types, and highlights that static testing has both automated (static analysis) and human (review) components.

## Notes:

- Static analysis tools are stuff like linters, CI pipelines (e.g., that test if code still compiles)
- looking at code for quality, structure, readability, completeness, correctness, testability, consistency.
- work products needs a structure/model and/or reqs against which it can be checked
- stakeholders should be heavily involved in static testing to get everyone on the same page and build confidence
- static testing finds defects directly while dynamic causes failures that point to defects
- static analysis tools might predict possible code paths but won't run them

### Review roles:

- Manager
- Author
- Moderator
- Scribe
- Reviewer
- Review Leader

### Review Success Factors

- clear objectives going in
- appropriate review type
- review small chunks
- feedback
- adequate time to prep for review
- management support
- part of team culture
- adequate training for each role
- facilitators/moderators at meetings

# Test Analysis and Design

## keywords

**acceptance criteria**: Conditions that and implementation of the user story must meet  
**acceptance test-driven development**: collaborative, test-first approach; tests created before code is even written
**black-box test technique**: analysis of behavior of test object, no ref to internal structure or code  
**boundary value analysis**: black box, exercises boundaries of ordered partitions; 2-value (checks boundary val and closest neighbor); 3-value (checks boundary val and closest neighbor on both sides)  
**branch coverage**: code can branch at if/else statements, loops, exception handling; this coverage tries to exercise all paths through code (unconditional and conditional)
**checklist-based testing**: basically, someone else does the error guessing and then a tester writes tests based on those checklist items; often phrased as questions; must be regularly updated; advantage is flexibility because checks are higher level, but disadvantage is repeatability  
**collaboration-based test approach**: defect avoidance by collab and communication  
**coverage**:  
**coverage item**:  
**decision table testing**: black box, test implementations of reqs that specify how different combos on inputs result in diff combos of outcomes  
**equivalence partitioning**: black box, partitions data inputs/outputs/config items/internal vals/time vals/params into groups that behave the same -- a defect caused by one piece of data in a partition should appear for all others as well  
**error guessing**: guess at possible errors, defects and failures and test those (based on past app behavior, common errors for that type of app, errors that show up commonly in because of developers); looks at errors related to: input, output, logic, computation, interfaces, or data  
**experience-based test technique**: rely on knowledge and experience of tester  
**exploratory testing**: tester comes up with tests while interacting with test object, often done in "sessions" with pre-defined duration; exploration is guided by test charter  
**state transition testing**: black box, shows possible states and tests transistions between them, event driven; rows represent states, cols represent transitions  
**statement coverage**: Tries to test all statements, which may not mean all branches  
**test technique**:  
**white-box test technique**: structure-based techniques, internal struct and processing, created after software is designed, run on execution; strength is discovering how software works when spec is out of date; weakness is it misses any defects of omission

## Notes

- **Each Choice coverage**: type of equivalence partitioning that requires test cases to exercise each partition from each set of partitions at least once, does not take into account combos of partitions

- **Decision Table Notation**: The notation for conditions is as follows: “T” (true) means that the condition is satisfied. “F” (false) means
  that the condition is not satisfied. “–” means that the value of the condition is irrelevant for the action
  outcome. “N/A” means that the condition is infeasible for a given rule. For actions: “X” means that the
  action should occur. Blank means that the action should not occur. Other notations may also be used

- **Coverage for State transition testing**: all states coverage, valid transitions coverage, all transitions coverage

### White box coverage testing techniques:

- statement testing
- branch testing
- API testing
- neuron coverage in neural network testing

### Experience-based test techniques:

- Error guessing
  -- fault attacks: generate list of possible issues
- Exploratory testing
- Checklist-based testing

### Collaboration-based approaches

- User Story writing: card, coversation, confirmation; should be Independent, Negotiable, Valuable, Estimable, Small, Testable (INVEST); acceptance criteria should define the complete behavior of the feature.

#### Formats

- scenerio-oriented: (given/when/then)
- rule-oriented (checklist, input-output mapping)

### Acceptance Criteria

- Conditions that and implementation of the user story must meet. Used to:

* define user story scope,
* reach consensus
* describe positive and negative scenerios,
* serve as basis for acceptance testing
* allow planning and estimation

## Acceptance Test-driven Development (ATDD)

- Discuss, distill, develop, demo
- TDD focuses on unit tests and technical correctness/ ATDD focuses on verifying business reqs

# Managing Test Activities

## Test Strategy & Planning

Test Strategy - High-level organizational approach
Test Approach - Project-specific implementation of strategy
Test Planning - Activity of defining test objectives and approach
Test Plan - Document describing test objectives, approach, resources, and schedule

## Test Models & Frameworks

Test Pyramid - Model showing testing levels (unit → integration → system)
Testing Quadrants - Four-quadrant model (business/technology-facing, support/critique)

## Test Execution & Control

Entry Criteria - Conditions required to start testing (resources, testware, init quality of test object)
Exit Criteria - Conditions required to complete testing (meaures of thoroughness, checklist complete, or running out of time/budget)
Test Monitoring - Ongoing tracking of test progress and metrics
Test Control - Taking corrective actions based on monitoring data

## Test Reporting

Test Progress Report - Ongoing status during testing periods
Test Completion Report - Final summary at testing milestones

## Risk Management Framework

### Risk Process Activities:

Risk Identification - Finding and recognizing risks
Risk Analysis - Assessing likelihood and impact
Risk Assessment - Overall process of identification + analysis
Risk Control - Making decisions and implementing measures
Risk Mitigation - Taking action to reduce risk
Risk Monitoring - Ongoing tracking of risks

### Risk Components:

Risk - Factor that could cause negative consequences
Risk Level - Measure combining likelihood and impact
Risk Management - Coordinated activities to direct and control risk

### Risk Types:

Product Risk - Risks related to the software being tested
Project Risk - Risks related to project management and resources
Risk-based Testing - Testing approach prioritized by risk analysis

### Defect Management

Defect Management - Complete process of handling defects
Defect Report - Documentation of individual defects

This organization shows the logical flow from strategic planning through execution and control, with risk management and defect management as supporting processes throughout.

## Notes

### Test Plan

- context, assumptions/constraints, people involved and how, forms and frequency of communication, risks, approaches, budget/schedule

### Estimation techniques

Based on:

- ratios based on previous projects
- extrapolation based on current point in current project
- Wideband Delphi (group of experts making estimates separately (wideband) and comparing in various rounds (delphi), technique for harnessing collective wisdom)
- Three-point estimation: most optimistic, most likely, most pessimistic. final estimates based on arithmetic mean. `E = (a + 4*m + b) / 6` -- likely is weighted; standard deviation can be calculated (`(b-a)/6)

## Prioritization:

- Risk-based priority, Coverage-based, Req-based (can be thrown off by dependencies)

## Test Pyramid:

- shows different levels of granularity/execution time (least tests at UI/e2e level, more at service/integration level, most at unit level)

## Testing Quadrants

[testing quadrants image](./testing_quadrants.png)
Image curtesy of OnPath "[What are Agile Testing Quadrants (and are they still relevant)?](https://www.onpathtesting.com/blog/what-are-agile-testing-quadrants)" by Brian Borg


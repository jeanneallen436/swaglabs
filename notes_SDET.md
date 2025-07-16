\# SDLC (software development lifecycle)

estimate of timeframe for proj, sets framework and schedule for deliverables, tracking, visibility and teamwork, speeds up development, client relations, decrease risk

\- req gathering and feasibility study

- $, legal, function, tech (hardware), schedule

\- design

- modules, functionality, interface/dependency, database UML, architecture diagrams, errors, i/o

\- implementation

- coding

\- testing

-

\- deployment

- release and deploy

\- maintenance

- bug fixes, upgrades, new features

\# STLC (software testing lifecycle)

Entry criteria (prereqs for testing to begin), Exit criteria (items to complete before testing can conclude)

- Req analysis
- Test planning
- Test case dev
- Test environment setup
- Test execution
- Test Closure

All tests do not need to pass. Test limitations, edge cases, non-critical issues, flaky test issues documented. Bug fixes, enhancement requests, performance improvements, future test automation scheduled. Everyone understands risk level and exit requriements (e.g., 95% pass rate with no critical defects)

RTM (requirement traceability matrix)

- Excel doc with requirements and testcases

Cols: ID, ReqID, ReqDesc, TestcaseID, TestcaseDesc, Testdesigner, UATneeded (user acceptance test env -- simulates prod env if different from test env), Test execution (test env, UAT env, prod env), Defects?, DefectReportID, defectStatus

OR

- More basic: ID, what we're testing, steps to test, test data, expected result

forward and backward traceability:

- All reqs covered by test cases (forward), defect fixes don't add unnecessary features and don't change requirements OR changes to requirements documented and justified

\# PlexTrac QUESTIONS

- Waterfall method? Is the app complete/in production? Were tests written along the way?
- Where is plextrac dev team? Do we interact with them much? How intimately do we as testers need to know the app code? What are the app technologies?
- Why are we testing the app? How did the project come about? Do we have access to the app requirements?
- What happens if the app breaks? What is a catastrophic break?
- Why did we pick the testing framework?
- How long is the project supposed to take? Is there ongoing development to the app or is it largely complete except for bug fixes? What tests have not been written? How often do new development/defect fixes break the tests?

\# Types of Tests

\## Smoke Testing

Is deployed software build stable and ready for testing? Confidence testing. Mini, rapid regression test of major functionality. Usually done manually. If fails, send back to dev team for feature fixes

Code -> Unit testing -> integration testing -> sanity testing -> smoke testing -> functional testing

\## Regression Testing

Pipelines, makes sure added code/features have not broken existing build.

- Does app build?
- Does basic functionality work?
- Specific regression tests can test features/functionality affected by code that changed.

Must map code to functionality (which libraries are used where? Which re-usable code is used where?)

- https://www.guru99.com/regression-testing.html

\## Functional Tests ( https://www.browserstack.com/guide/functional-testing)

Validates system against requirements, mainly black box

- Tests UI, APIs, database, security, client/server communication, cross-platform compatibility etc.

Does not test long-term use issues like memory or code deprication

\### Unit tests

- Code coverage, test all methods, lines, code paths

\### Integration Tests

- Makes sure modules work together, e2e outcome is what is expected and meets standards.

\## Usability Testing

- Get users to use the app and watch where they get stuck and how they use it.
- Focused on how users perform specific tasks, Different from User testing which is much less task/goal oriented.
- Diff from UX testing which is even broader and takes into account perception of the design/brand representation, etc.

\# Test Plan

- Scope
- Objectives
- Environment
- Data (fixtures)
- Roles and Responsibilities
- Schedule and timeline
- Exit criteria

\# Non-functional tests

- evaluate stuff like performance, scalability, reliability

\# Exploratory Tests

- Creative, thinking about how one might use the app and discovering use cases and possibly issues.
- Categorize common faults, find risks, and develop ideas for testing.
- Best in pairs with 90+ minute sessions.

\# Writing Bug reports:

- Bug ID/title
- Severity and priority
- Description
- Environment
- Steps to reproduce
- Expected result/Actual result
- Attachments
- If applicable, SHA where bug was introduced

\# Writing Test Cases

Use test techniques (black box):

- boundary value analysis (test vals at edges of ranges)
- equivalence partition (div ranges up by similar behavior/response and test each category)
- state transition technique (test transitions)
- error guessing technique (what errors do you imagine could occur?)
- decision table technique (literal table with input options on one axis and outputs on the other)
- use case (know how user interacts with system)
- pairwise testing (test all possible pairs of inputs -- bugs arise from interaction between factors)
- classification tree method (hierarchical tree structure to identify test cases from requirements)
- orthogonal array testing (cover max num possibilities with min test cases; use mathematical formula to determine best coverage)
- cause-effect graphing (link action to outcome and test cause-effect)
- scenario testing (story)
- Checklist-based testing (based off requirements)
- model-based testing (abstract models that represent system behavior/paths)

\# Test techniques

1. Decision Table Testing (expect different outcomes based on different inputs)

- Determine inputs/options

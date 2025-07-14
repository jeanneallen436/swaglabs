# Fundamentals of Testing

## keywords

**coverage:** percentage of reqs covered by tests. Also can be percentage of code tests hit.
**debugging:** concerned with finding causes rather than defects and involves fixing defects while testing only identifies.  
**defect:** Something broken.  
**error:**  
**failure:**  
**quality:**  
**quality assurance:** focus on process implementation and improvement, preventative, "Are we building the product right?"  
**root cause:** Underlying cause  
**test analysis:** "what to test?"  
**test basis:** all info and docs used to derive test cases and figure out what needs to be tested.  
**test case:** inputs, befores, expected results, afters -- for specific objective or condition to exercise code path or verify req  
**test completion:** happens at project milestones, test env shutdown, analysis for future happens.  
**test condition:**  
**test control:**  
**test data:** Fixtures -- any data necessary to run tests (like username and password)  
**test design:** "how to test?"  
**test execution:** running the tests  
**test implementation:** most of the work, writing and organizing the actual tests  
**test monitoring:** checking of test activities. "are these tests working?"  
**test object:** the component, system, or work product under test (diff from software/app or the overall product or system); test objects are smaller in scope and context dependent  
**test objective:** What is the test trying to test?  
**test planning:**  
**test procedure:**  
**test process:**  
**test result:**  
**testing:** focus on finding defects, "Did we build the product right?"  
**testware:**  
**traceability:**  
**validation:** checking if system meets users' and stakeholders' needs  
**verification:** checking if system meets reqs

## Notes:

_Testing_ is different from _debugging_, which is conecerned with finding causes of failures and fixing them.

_Static_ testing is done without executing software. It directly finds defects and does not cause failures because nothing is being ran.

_Dynamic_ testing is done when running software.

_QA_ is different from testing: broader scope (testing is part of QA), focus on implementation and improvement of processes. A QA uses test results to see how well development and processes are performing.

### Testing Principles

1.  Testing shows the presence (not absence) of defects.
2.  Exhaustive testing is impossible.
3.  Early testing saves time and money.
4.  Defects cluster (Pareto principle). This helps identify risk areas and focus testing.
5.  Aside from regression, some tests wear out and don't need to be run over and over (devs learn test patterns, old tests don't test newly added code, devs code to the exact test scenerio and miss variants).
6.  Testing is context dependent.
7.  Absense-of-defects does not mean system meets users' needs.

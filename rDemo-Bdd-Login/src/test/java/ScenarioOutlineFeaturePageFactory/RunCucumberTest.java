package ScenarioOutlineFeaturePageFactory;



import static org.junit.Assert.fail;

import org.junit.Test;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"html:reports"},features="src/test/resources/ScenarioOutlineFeature")
public class RunCucumberTest {

@Test
public void test() {
	fail("Not yet implemented");
}
}

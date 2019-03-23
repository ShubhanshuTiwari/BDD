package ScenarioOutlineFeature;



import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(plugin= {"html:reports"},features="src/test/resources/ScenarioOutlineFeature")
public class RunCucumberTest {

	/*@Test
	public void test() {
		//("Not yet implemented");
	}
*/
}

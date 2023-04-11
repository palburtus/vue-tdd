import { mount } from '@vue/test-utils'
import Registration from '@/components/Registration.vue'



describe("Registration Form", () => {

  describe("Renders Properly", () => {

    test("Component does render", () => {

      const wrapper = mount(Registration);
      expect(wrapper.vm).toBeTruthy();
  
    });
  
    test("has full name input", ()=>{
      
      const wrapper = mount(Registration);
      const textInput = wrapper.find('input[type="text"]');
  
      expect(textInput.exists()).toBe(true);
  
    });
  
    test("has email input", () => {
  
      const wrapper = mount(Registration);
      const textInput = wrapper.find('input[type="email"]');
  
      expect(textInput.exists()).toBe(true);
    })
  
    test("Make sure a button is present in the form", () => {
      const wrapper = mount(Registration);
  
      const submit = wrapper.find('button[type="submit"]');
  
      expect(submit.exists()).toBe(true);
    });
  });

  describe("Form submitted", () => {

    test("Error message for missing email", async () => {
      
      const wrapper = mount(Registration);
    
      await wrapper.find('input[type="email"]').setValue("");

      await wrapper.find("form").trigger("submit.prevent");

      expect(wrapper.find(".result").text()).toBe("Email Required");

    });

    test("Error message for email with no @", async () => {
      
      const wrapper = mount(Registration);
    
      await wrapper.find('input[type="email"]').setValue("testone.com");

      await wrapper.find("form").trigger("submit.prevent");

      expect(wrapper.find(".result").text()).toBe("Invalid Email Missing @");

    });

    test("Error message for email with no .com", async () => {
      
      const wrapper = mount(Registration);
    
      await wrapper.find('input[type="email"]').setValue("testone@com");

      await wrapper.find("form").trigger("submit.prevent");

      expect(wrapper.find(".result").text()).toBe("Invalid Email Missing .");

    });

  });

});
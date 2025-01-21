import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-[70vh] flex flex-col justify-between">
      <div className="space-y-4">
        {/* <PageHeading title={"About Us"} disbaledBackBtn={true} /> */}
        <div className="w-full bg-white rounded-2xl min-h-[60vh]">
          <div className="bg-gray-100 ">
            <div className="bg-white shadow-md rounded-lg p-8">
              <h1 className="text-3xl font-bold text-blue-600 mb-6">About Us</h1>

              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Acceptance of Terms</h3>
                <p className="text-sm text-gray-600">
                  By using [Gym Studio Name] and its Trainer Review Platform (the "Platform"), you agree to these Terms and Conditions. If you do not agree, you may not use the Platform.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Eligibility</h3>
                <p className="text-sm text-gray-600">
                  Users must be at least 18 years old or have parental consent to access the Platform. You are responsible for providing accurate information when registering.
                </p>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Usage Guidelines</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Use the Platform for intended purposes such as booking gym services, submitting reviews, and connecting with trainers.</li>
                  <li>Avoid prohibited actions like providing false information, posting inappropriate content, or engaging in illegal activities.</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Reviews and Feedback</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Reviews must reflect genuine experiences.</li>
                  <li>Offensive, defamatory, or harmful content is not allowed and may be removed.</li>
                  <li>[Gym Studio Name] reserves the right to moderate user-submitted reviews.</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Cancellation and Refunds</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>Bookings may be canceled based on the studio's policy (e.g., 24 hours before a session).</li>
                  <li>Refunds are processed according to the Refund Policy.</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Liability Disclaimer</h3>
                <ul className="list-disc list-inside text-sm text-gray-600">
                  <li>[Gym Studio Name] is not liable for injuries, damages, or outcomes resulting from the use of its services or trainers.</li>
                  <li>The Platform is used at your own risk.</li>
                </ul>
              </section>

              <section className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">7. Content Ownership</h3>
                <p className="text-sm text-gray-600">
                  All Platform content, including designs, text, and images, is owned by [Gym Studio Name] and may not be reused without written permission.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">8. Privacy</h3>
                <p className="text-sm text-gray-600">
                  [Include your privacy policy summary or link to the full policy.]
                </p>
              </section>
            </div>
          </div>

        </div>
        <div className="flex justify-end pt-5">
          <Button
            onClick={() => navigate("edit")}
            size="large"
            className="px-8 w-[250px] bg-playground font-semibold"
            htmlType="submit"
            type="primary"
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

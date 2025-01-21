import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import PageHeading from "../../Components/PageHeading";
import { FaAngleLeft } from "react-icons/fa6";

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center gap-2 text-xl">
        <FaAngleLeft />
        <h1>Terms & Condition</h1>
      </div>
      <div className="rounded-lg py-4 border-lightGray border-2 shadow-lg mt-8 bg-white">
        <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
          <h3 className="text-2xl text-black mb-4 border-b-2 border-lightGray/40 pb-3 pl-16">
            Terms & Condition
          </h3>
          <div className="w-full px-16">
            {/* <Form
              name="basic"
              layout="vertical"
              className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              initialValues={{
                name: profileData.name,
                email: profileData.email,
              }}
            >
              <div className="col-span-3 space-y-6 ">
                <div className="min-h-[300px] flex flex-col items-center justify-center p-8 border border-black bg-lightGray/15">
                  <div className="my-2">
                    <img
                      src={dashProfile}
                      alt=""
                      className="h-28 w-28 rounded-full border-4 border-black"
                    />
                  </div>
                  <h5 className="text-lg text-[#222222]">{"Profile"}</h5>
                  <h4 className="text-2xl text-[#222222]">{"Admin"}</h4>
                </div>
              </div>
              <div className="col-span-9 space-y-[24px] w-full">
                <Form.Item
                  className="text-lg  font-medium text-black"
                  label="Name"
                  name="name"
                >
                  <Input
                    readOnly
                    size="large"
                    className="h-[56px] rounded-lg"
                  />
                </Form.Item>
                <Form.Item
                  className="text-lg  font-medium text-black"
                  label="Email"
                  name="email"
                >
                  <Input
                    readOnly
                    size="large"
                    className="h-[56px] rounded-lg"
                  />
                </Form.Item>
                <Form.Item
                  className="text-lg text-[#222222] font-medium"
                  label="Phone Number"
                  name="phone"
                >
                  <PhoneCountryInput />
                </Form.Item>
                <Form.Item className="flex justify-end pt-4">
                  <Button
                    // onClick={(e) => navigate(`edit`)}
                    size="large"
                    type="primary"
                    className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold"
                  >
                    Save Changes
                  </Button>
                </Form.Item>
              </div>
            </Form> */}
            <div className="space-y-5 text-black text-sm">
              <h1>Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspe  ndisse vitae. Tellus interdum enim lorem vel morbi lectus.</h1>
              <h1>Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspendisse vitae. Tellus interdum enim lorem vel morbi lectus.</h1>
              <h1>Lorem ipsum dolor sit amet consectetur. Fringilla a cras vitae orci. Egestas duis id nisl sed ante congue scelerisque. Eleifend facilisis aliquet tempus morbi leo sagittis. Pellentesque odio amet turpis habitant. Imperdiet tincidunt nisl consectetur hendrerit accumsan vehicula imperdiet mattis. Neque a vitae diam pharetra duis habitasse convallis luctus pulvinar. Pharetra nunc morbi elementum nisl magnis convallis arcu enim tortor. Cursus a sed tortor enim mi imperdiet massa donec mauris. Sem morbi morbi posuere faucibus. Cras risus ultrices duis pharetra sit porttitor elementum sagittis elementum. Ut vitae blandit pulvinar fermentum in id sed. At pellentesque non semper eget egestas vulputate id volutpat quis. Dolor etiam sodales at elementum mattis nibh quam placerat ut. Suspendisse est adipiscing proin et. Leo nisi bibendum donec ac non eget euismod suscipit. At ultricies nullam ipsum tellus. Non dictum orci at tortor convallis tortor suspendisse. Ac duis senectus arcu nullam in suspe  ndisse vitae. Tellus interdum enim lorem vel morbi lectus.</h1>
            </div>
            <div className="flex justify-end pt-4">
              <Button
                onClick={(e) => navigate(`edit`)}
                size="large"
                type="primary"
                className="px-8 bg-black text-white hover:bg-black/90 rounded-full font-semibold w-1/4"
              >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsConditions;

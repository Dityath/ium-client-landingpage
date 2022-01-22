import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import { useRouter } from "next/router";
import MainTitle from "../../../global/title/mainTitle";
import Step from "../component/step";

const Section1 = () => {
  const router = useRouter();
  const [confirm, setConfirm] = useState(false);
  const [step, setStep] = useState(1);
  const [login, setLogin] = useState(false);

  return (
    <>
      {login ? (
        <div className="fixed z-50 w-full h-screen flex justify-center items-center shadow-xl">
          <div className="bg-white w-full max-w-xs py-10 border-qolbiLight border-2 flex justify-center items-center gap-5 flex-col rounded-md">
            <div className="w-14 h-14 -mt-16 bg-qolbiLight rounded-full flex justify-center items-center">
              <svg
                width="47"
                height="47"
                viewBox="0 0 47 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.3333 13L17.7917 34.5417L8 24.75"
                  stroke="#BA7C10"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            Data berhasil disimpan dan dikirim
            <button
              className=" bg-qolbiLight px-5 py-2"
              onClick={() => router.push("/")}
            >
              Ok
            </button>
          </div>
        </div>
      ) : (
        ""
      )}

      <section className="pt-40 w-full max-w-6xl mx-auto font-lato">
        <MainTitle>Tahap Pendaftaran</MainTitle>
        {confirm ? (
          <>
            <Step className="mt-20" stepNumber={step} />

            {/*step1*/}
            <div
              className={`${
                step === 1 ? "flex" : "hidden"
              } mt-24 flex-col gap-10 justify-center items-center`}
            >
              <Formik
                initialValues={{
                  email: "",
                  username: "",
                  password: "",
                  confirmPass: "",
                }}
                onSubmit={() => {
                  setStep(step + 1);
                }}
              >
                {({}) => (
                  <Form>
                    <div className="flex gap-10">
                      <div className="flex flex-col gap-5">
                        <label className="p-1">Email</label>
                        <label className="p-1">Username</label>
                        <label className="p-1">Password</label>
                        <label className="p-1">Konfirmasi Password</label>
                      </div>
                      <div className="flex flex-col gap-5">
                        <Field
                          className="bg-qolbiVeryLight rounded-md p-1"
                          name="email"
                          type="email"
                          required
                        />
                        <Field
                          className="bg-qolbiVeryLight rounded-md p-1"
                          name="username"
                          type="input"
                          required
                        />
                        <Field
                          className="bg-qolbiVeryLight rounded-md p-1"
                          name="password"
                          type="password"
                          required
                        />
                        <Field
                          className="bg-qolbiVeryLight rounded-md p-1"
                          name="confirmPass"
                          type="password"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 justify-center items-center mt-20">
                      <button
                        className="w-40 py-1 rounded-md border-2 border-qolbiVeryLight"
                        type="button"
                        onClick={() => setConfirm(!confirm)}
                      >
                        Kembali
                      </button>
                      <button
                        className="w-40 py-1 rounded-md bg-qolbiVeryLight"
                        type="submit"
                      >
                        Simpan & Lanjut
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            {/*step2*/}
            <div
              className={`${
                step === 2 ? "flex" : "hidden"
              } mt-24 flex-col gap-10 justify-center items-center`}
            >
              <Formik
                initialValues={{
                  namaLengkap: "",
                  kelamin: "",
                  phone: "",
                  nikah: "",
                }}
                onSubmit={() => {
                  setStep(step + 1);
                }}
              >
                {({}) => (
                  <Form>
                    <div className="flex gap-10">
                      <div className="flex flex-col gap-5">
                        <label className="p-1">Nama Lengkap</label>
                        <label className="p-1">Jenis Kelamin</label>
                        <label className="p-1">Nomor HP</label>
                        <label className="p-1">Status Pernikahan</label>
                      </div>
                      <div className="flex flex-col gap-5">
                        <Field
                          className="bg-qolbiVeryLight rounded-md p-1"
                          name="namaLengkap"
                          type="input"
                          required
                        />
                        <div className="flex gap-2">
                          <Field
                            className="bg-qolbiVeryLight rounded-md p-1"
                            name="username"
                            type="radio"
                            value="laki-laki"
                          />
                          <label>Laki-Laki</label>
                          <Field
                            className="bg-qolbiVeryLight rounded-md p-1"
                            name="username"
                            type="radio"
                            value="Perempuan"
                          />
                          <label>Perempuan</label>
                        </div>
                        <Field
                          className="bg-qolbiVeryLight rounded-md p-1"
                          name="phone"
                          type="number"
                          required
                        />
                        <div className="flex gap-2">
                          <Field
                            className="bg-qolbiVeryLight rounded-md p-1"
                            name="nikah"
                            type="radio"
                            value="sudah"
                          />
                          <label>Sudah Menikah</label>
                          <Field
                            className="bg-qolbiVeryLight rounded-md p-1"
                            name="nikah"
                            type="radio"
                            value="belum"
                          />
                          <label>Belum Menikah</label>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-5 justify-center items-center mt-20">
                      <button
                        onClick={() => setStep(step - 1)}
                        className="w-40 py-1 rounded-md border-2 border-qolbiVeryLight"
                        type="button"
                      >
                        Kembali
                      </button>
                      <button
                        className="w-40 py-1 rounded-md bg-qolbiVeryLight"
                        type="submit"
                      >
                        Simpan & Lanjut
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            {/*step3*/}
            <div
              className={`${
                step === 3 ? "flex" : "hidden"
              } mt-24 flex-col gap-10 justify-center items-center`}
            >
              <Formik
                initialValues={{
                  ktp: "",
                  kk: "",
                  suratNikah: "",
                }}
                onSubmit={() => {
                  setStep(step + 1);
                }}
              >
                {({}) => (
                  <Form>
                    <div className="flex gap-10">
                      <div className="flex flex-col gap-5">
                        <label className="p-1 border-2 border-white">
                          Foto KTP
                        </label>
                        <label className="p-1 border-2 border-white">
                          Foto Kartu Keluarga
                        </label>
                        <label className="p-1 border-2 border-white">
                          Foto Surat Nikah
                        </label>
                      </div>
                      <div className="flex flex-col gap-5">
                        <Field
                          className="border-qolbiVeryLight box-border border-2 rounded-md p-1"
                          name="ktp"
                          type="file"
                          required
                        />
                        <Field
                          className="border-qolbiVeryLight box-border border-2 rounded-md p-1"
                          name="kk"
                          type="file"
                          required
                        />
                        <Field
                          className="border-qolbiVeryLight box-border border-2 rounded-md p-1"
                          name="suratNikah"
                          type="file"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex gap-5 justify-center items-center mt-20">
                      <button
                        onClick={() => setStep(step - 1)}
                        className="w-40 py-1 rounded-md border-2 border-qolbiVeryLight"
                        type="button"
                      >
                        kembali
                      </button>
                      <button
                        className="w-40 py-1 rounded-md bg-qolbiVeryLight"
                        type="submit"
                      >
                        simpan & lanjut
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>

            {/* step4 */}
            <div
              className={`${
                step === 4 ? "flex" : "hidden"
              } mt-24 flex-col gap-10 justify-center items-center`}
            >
              <div>
                <h2 className="text-qolbiDark font-bold text-lg">
                  Username & Email
                </h2>
                <div className="mt-5 flex gap-8">
                  <div>
                    <p>Email</p>
                    <p>Username</p>
                  </div>
                  <div>
                    <p>dityaathallah107@gmail.com</p>
                    <p>dityath</p>
                  </div>
                </div>
                <h2 className="mt-10 text-qolbiDark font-bold text-lg">
                  Biodata Diri
                </h2>
                <div className="mt-5 flex gap-8">
                  <div>
                    <p>Nama Lengkap</p>
                    <p>Jenis Kelamin</p>
                    <p>Nomor Hp</p>
                    <p>Status Pernikahan</p>
                  </div>
                  <div>
                    <p>Ditya</p>
                    <p>Laki - Laki</p>
                    <p>081221087158</p>
                    <p>Sudah Menikah</p>
                  </div>
                </div>
                <h2 className="mt-10 text-qolbiDark font-bold text-lg">
                  Dokumen
                </h2>
                <div className="mt-5 flex gap-8">
                  <div>
                    <p>Foto KTP</p>
                    <p>Foto Kartu Keluarga</p>
                    <p>Foto Surat Nikah</p>
                  </div>
                  <div>
                    <p className="opacity-40">0*T6eLFfrBXeZuWRtI.png</p>
                    <p className="opacity-40">0*T6eLFfrBXeZuWRtI.png</p>
                    <p className="opacity-40">0*T6eLFfrBXeZuWRtI.png</p>
                  </div>
                </div>

                <div className="flex gap-5 justify-center items-center mt-20">
                  <button
                    onClick={() => setStep(1)}
                    className="w-40 py-1 rounded-md border-2 border-qolbiVeryLight"
                    type="button"
                  >
                    Ubah Data
                  </button>
                  <button
                    className="w-40 py-1 rounded-md bg-qolbiVeryLight"
                    type="submit"
                    onClick={() => setLogin(true)}
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="flex mt-20 gap-5 flex-col justify-center items-center">
            <h1 className="text-2xl">Masukkan kode konfirmasi</h1>
            <p>
              Kode konfirmasi akan diberikan oleh pemilik kontrakan setelah
              pendaftaran telah disetujui.
              <br /> Chat melalui WA untuk informasi lebih lanjut.
            </p>

            <Formik
              initialValues={{
                kode: "",
              }}
              onSubmit={(data) => {
                if (data.kode === "f566z") {
                  setConfirm(!confirm);
                }
              }}
            >
              {({}) => (
                <Form>
                  <div className="flex gap-10 mt-10">
                    <div className="flex flex-col gap-5">
                      <Field
                        className="bg-qolbiVeryLight rounded-md p-1"
                        name="kode"
                        type="input"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex gap-5 justify-center items-center mt-20">
                    <button
                      className="w-40 py-1 rounded-md bg-qolbiVeryLight"
                      type="submit"
                    >
                      Simpan & Lanjut
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        )}
      </section>
    </>
  );
};

export default Section1;

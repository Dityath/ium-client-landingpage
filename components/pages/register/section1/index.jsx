import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import MainTitle from "../../../global/title/mainTitle";
import Step from "../component/step";

const Section1 = () => {
  const [confirm, setConfirm] = useState(false);
  const [step, setStep] = useState(3);

  return (
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
  );
};

export default Section1;

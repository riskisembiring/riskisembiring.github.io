import React from 'react';
import Gallery from './Gallery'; // Pastikan path ini benar

function Home() {
  return (
    <div>
      <h2>Selamat Datang di Gereja Sidang Rohul Kudus Indonesia</h2>

      <section>
        <h3>Halo Saudara/i yang dikasih dalam Tuhan</h3>
        <p>Selamat datang di gereja kami. Kami sangat senang bisa berbagi kasih dan kebersamaan dengan Anda semua. Semoga Anda merasa diterima dan diberkati dalam setiap kegiatan kami. Bergabunglah dengan kami untuk ibadah dan persekutuan</p>
      </section>

      {/* <section>
        <h3>Pengumuman Terbaru</h3>
        <ul>
          <li>Retret tahunan akan diadakan pada tanggal 10-12 Juli. Daftarkan diri Anda segera!</li>
          <li>Pelayanan doa akan dilakukan setiap Rabu malam pukul 19:00.</li>
          <li>Donasi untuk kegiatan sosial dapat disalurkan melalui rekening gereja.</li>
        </ul>
      </section> */}

      <section>
        <h3>Jadwal Ibadah</h3>
        <table>
          <thead>
            <tr>
              <th>Hari</th>
              <th>Waktu</th>
              <th>Jenis Ibadah</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Minggu</td>
              <td>10:00 - 12:00</td>
              <td>Ibadah Umum</td>
            </tr>
            <tr>
              <td>Rabu</td>
              <td>19:00 - 20:00</td>
              <td>Doa Malam</td>
            </tr>
            <tr>
              <td>Jumat</td>
              <td>18:00 - 19:00</td>
              <td>Ibadah Pemuda</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h3>Galeri Foto</h3>
        <Gallery />
      </section>
    </div>
  );
}

export default Home;

const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  // test('[3] verilen propu trimliyor', () => {})
  // test('[4] verilen dışındaki proplar trimlenmeden döndürülüyor', () => {})
  test("[3] verilen propu trimliyor", () => {
    //arrange
    let inputObj = { a: "   kkkk  ", b: " ll ll " };
    let expected = { a: "kkkk", b: " ll ll " };
    //act
    let actual = utils.verileniTrimle(inputObj, "a");
    //assert
    expect(actual).toEqual(expected);
  });
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    let inputObj = { a: "   kkkk  ", b: " ll ll " };
    let expected = inputObj.b;
    let actual = utils.verileniTrimle(inputObj, "a");
    expect(actual.b).toBe(expected);
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  // test('[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }', () => {})
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor {tamsayi:2}", () => {
    let input = [{ tamsayi: 1 }, { tamsayi: 2 }, { tamsayi: 3 }];
    let expected = 3;
    let actual = utils.enBuyukTamsayiyiBul(input);
    expect(actual).toBe(expected);
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    sayici = new utils.Sayici(3); // her test yeni bir sayı ile başlatılıyor
  });
  // test('[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor', () => {})
  // test('[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor', () => {})
  // test('[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz', () => {})
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    const actual = sayici.asagiSay();
    expect(actual).toBe(3);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    sayici.asagiSay();
    const actual = sayici.asagiSay();
    expect(actual).toBe(2);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    for (let i = 0; i < 1000; i++) {
      sayici.asagiSay();
    }
    let actual = sayici.asagiSay();
    expect(actual).toBe(0);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  // test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {})
  // test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {})
  // test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {})
  // test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {})
  // test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {})
  // test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {})

  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    const actual = mevsimler.sonraki();
    expect(actual).toBe("yaz");
  });
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toBe("sonbahar");
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    mevsimler.sonraki();
    mevsimler.sonraki();
    const actual = mevsimler.sonraki();
    expect(actual).toBe("kış");
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    for (let i = 0; i < 3; i++) {
      mevsimler.sonraki();
    }
    const actual = mevsimler.sonraki();
    expect(actual).toBe("ilkbahar");
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    for (let i = 0; i < 4; i++) {
      mevsimler.sonraki();
    }
    const actual = mevsimler.sonraki();
    expect(actual).toBe("yaz");
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    for (let i = 0; i < 39; i++) {
      mevsimler.sonraki();
    }
    const actual = mevsimler.sonraki();
    expect(actual).toBe("ilkbahar");
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  // test('[15] arabayı sürünce güncellenmiş odometer döndürüyor', () => {})
  // test('[16] arabayı sürmek benzin tüketiyor', () => {})
  // test('[17] benzinalma arabayı sürmeye izin veriyor', () => {})
  // test('[18] dolu depoya benzin alma etki etmiyor', () => {})
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    expect(focus.sur(100)).toBe(100);
    expect(focus.sur(100)).toBe(200);
    expect(focus.sur(100)).toBe(300);
    expect(focus.sur(200)).toBe(500);
    expect(focus.sur(200)).toBe(600);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    focus.sur(300);
    expect(focus.depo).toBe(10);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.sur(600);
    focus.benzinal(10);
    focus.sur(100);
    expect(focus.odometer).toBe(700);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    focus.benzinal(5);
    expect(focus.depo).toBe(20);
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  // test('[19] bir çift sayı verilirse true çözümlüyor', () => {})
  // test('[20] tek sayı verilirse false çözümlüyor', () => {})

  test("[19] bir çift sayı verilirse true çözümlüyor", async () => {
    expect(await utils.asenkronCiftSayi(3)).toBeFalsy();
  });
});

import forms from '../utils/forms';

const { providers, providersWithSubdomain } = forms;

describe('schema without subdomain', () => {
  it('should fail to validate', () => {
    expect(() =>
      providers.schema.validateSync({
        enabled: true,
        key: '',
        secret: '',
        callback: '',
      })
    ).toThrow();

    expect(() =>
      providers.schema.validateSync({
        enabled: true,
        key: 'example-key',
        secret: 'example-secret',
        callback: 'example.com/callback',
      })
    ).toThrow();
  });

  it('should successfully validate', () => {
    expect(() =>
      providers.schema.validateSync({
        enabled: false,
        key: '',
        secret: '',
        callback: '',
      })
    ).not.toThrow();

    expect(() =>
      providers.schema.validateSync({
        enabled: true,
        key: 'example-key',
        secret: 'example-secret',
        callback: 'http://example.com/callback',
      })
    ).not.toThrow();

    expect(() =>
      providers.schema.validateSync({
        enabled: true,
        key: 'example-key',
        secret: 'example-secret',
        callback: 'http://localhost:1337/api/auth/example-provider/callback',
      })
    ).not.toThrow();
  });
});

describe('schema with subdomain', () => {
  it('should fail to validate', () => {
    expect(() =>
      providersWithSubdomain.schema.validateSync({
        enabled: true,
        key: '',
        secret: '',
        subdomain: '',
        callback: '',
      })
    ).toThrow();

    expect(() =>
      providersWithSubdomain.schema.validateSync({
        enabled: true,
        key: 'example-key',
        secret: 'example-secret',
        subdomain: 'http://example.com',
        callback: 'http://example.com/callback',
      })
    ).toThrow();

    expect(() =>
      providersWithSubdomain.schema.validateSync({
        enabled: true,
        key: 'example-key',
        secret: 'example-secret',
        subdomain: 'https://example.com',
        callback: 'http://example.com/callback',
      })
    ).toThrow();
  });

  it('should successfully validate', () => {
    expect(() =>
      providersWithSubdomain.schema.validateSync({
        enabled: false,
        key: '',
        secret: '',
        subdomain: '',
        callback: '',
      })
    ).not.toThrow();

    expect(() =>
      providersWithSubdomain.schema.validateSync({
        enabled: true,
        key: 'example-key',
        secret: 'example-secret',
        subdomain: 'example.com',
        callback: 'https://example.com/callback?invalid=quote',
      })
    ).not.toThrow();

    expect(() =>
      providersWithSubdomain.schema.validateSync({
        enabled: true,
        key: 'example-key',
        secret: 'example-secret',
        subdomain: 'sub.example-domain.com/example',
        callback: 'some://link',
      })
    ).not.toThrow();
  });
});

FROM microsoft/aspnetcore-build:1.1.1 as buildenv

WORKDIR /app
ARG configuration=Release

COPY ./*.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c $configuration -o /out

FROM microsoft/aspnetcore:1.1.1

WORKDIR /app
COPY --from=buildenv /out .

ENTRYPOINT ["dotnet", "GulpIntegration.dll"]
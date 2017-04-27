#Build and publish my code in the build container.
FROM microsoft/aspnetcore-build:1.1.1 as buildenv

WORKDIR /app
ARG configuration=Release

COPY ./WebApplication1.csproj .
RUN dotnet restore
COPY . .
RUN dotnet publish -c $configuration -o /out

#Copy the bits from the build container into the runtime image.
FROM microsoft/aspnetcore:1.1.1

WORKDIR /app
COPY --from=buildenv /out .

ENTRYPOINT ["dotnet", "WebApplication1.dll"]